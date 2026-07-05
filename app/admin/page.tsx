"use client"
import { useState, useMemo } from "react";
import {
  StickyNote,
  Newspaper,
  Users,
  LayoutGrid,
  Search,
  Plus,
  Menu,
  X,
  Trash2,
  Pencil,
  Mail,
  Phone,
  Building2,
  Calendar,
  Tag,
  MoreVertical,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type NoteDraft = { id?: string; title: string; body: string; tag: string; date: string };
type ArticleStatus = "Published" | "Draft";
type ClientStatus = "Active" | "Lead" | "Archived";
type ArticleDraft = { id?: string; title: string; status: ArticleStatus; date: string; views?: number };
type ClientDraft = { id?: string; name: string; company: string; email: string; phone: string; status: ClientStatus };

// ---------------------------------------------------------------------------
// Seed data
// ---------------------------------------------------------------------------

const seedNotes = [
  { id: "n1", title: "Client kickoff checklist", body: "Scope, timeline, payment terms, access to repo, brand assets.", tag: "Process", date: "2026-07-01" },
  { id: "n2", title: "Agriplot — data model ideas", body: "Split article content into data.json, migrate to typed dataArticle.ts once shape stabilizes.", tag: "Agriplot", date: "2026-06-28" },
  { id: "n3", title: "Portfolio — timeline component", body: "Diagonal staircase layout for experience section, watch absolute positioning on mobile.", tag: "Portfolio", date: "2026-06-20" },
];

const seedArticles: ArticleDraft[] = [
  { id: "a1", title: "EUDR compliance: what changes for exporters", status: "Published", date: "2026-06-30", views: 482 },
  { id: "a2", title: "Building a typed content layer in Next.js", status: "Draft", date: "2026-06-25", views: 0 },
  { id: "a3", title: "Freelancing on Mostaql: pricing a first project", status: "Published", date: "2026-06-10", views: 913 },
  { id: "a4", title: "Fixing Tailwind JIT misses with dynamic classes", status: "Draft", date: "2026-07-02", views: 0 },
];

const seedClients: ClientDraft[] = [
  { id: "c1", name: "Abd El-Djalil", company: "Personal Portfolio", email: "abd@example.com", phone: "+213 555 010 22", status: "Active" },
  { id: "c2", name: "Sarah Kaced", company: "Agriplot", email: "sarah@agriplot.co", phone: "+213 555 044 18", status: "Active" },
  { id: "c3", name: "Yacine Meziane", company: "Mostaql — Web Store", email: "yacine@example.com", phone: "+213 555 091 76", status: "Lead" },
  { id: "c4", name: "Nour Belkacem", company: "Ramada Group", email: "nour@ramada.example", phone: "+213 555 067 40", status: "Archived" },
];

const TABS = [
  { key: "notes", label: "Notes", icon: StickyNote },
  { key: "articles", label: "Articles", icon: Newspaper },
  { key: "clients", label: "Clients", icon: Users },
];

const statusStyles = {
  Published: "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-950/40 dark:text-emerald-300 dark:ring-emerald-400/30",
  Draft: "bg-amber-50 text-amber-700 ring-amber-600/20 dark:bg-amber-950/40 dark:text-amber-300 dark:ring-amber-400/30",
  Active: "bg-emerald-50 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-950/40 dark:text-emerald-300 dark:ring-emerald-400/30",
  Lead: "bg-sky-50 text-sky-700 ring-sky-600/20 dark:bg-sky-950/40 dark:text-sky-300 dark:ring-sky-400/30",
  Archived: "bg-stone-100 text-stone-500 ring-stone-500/20 dark:bg-stone-800/40 dark:text-stone-400 dark:ring-stone-400/30",
};

function StatusPill({ value }: { value: keyof typeof statusStyles }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${statusStyles[value] || "bg-stone-100 text-stone-600 ring-stone-500/20 dark:bg-stone-800/40 dark:text-stone-400 dark:ring-stone-400/30"}`}>
      {value}
    </span>
  );
}

function EmptyState({ icon: Icon, title, hint }: { icon: React.ComponentType<{ className?: string }>; title: string; hint: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-white/60 py-16 text-center dark:border-[#2a4a38] dark:bg-[#1a3a28]/60">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#F1E4C3] dark:bg-[#2a4a38]">
        <Icon className="h-5 w-5 text-[#9A6A11] dark:text-[#a3c9b8]" />
      </div>
      <p className="font-medium text-stone-700 dark:text-[#a3c9b8]">{title}</p>
      <p className="mt-1 max-w-xs text-sm text-stone-400 dark:text-[#8ab5a0]">{hint}</p>
    </div>
  );
}

function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-stone-900/40 p-0 sm:items-center sm:p-4 dark:bg-stone-950/70" onClick={onClose}>
      <div
        className="w-full max-w-md rounded-t-2xl bg-white p-5 shadow-xl sm:rounded-2xl dark:bg-[#1a3a28]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-semibold text-stone-800 dark:text-[#d4f5e0]">{title}</h3>
          <button onClick={onClose} className="rounded-lg p-1.5 text-stone-400 hover:bg-stone-100 hover:text-stone-600 dark:hover:bg-[#0a1f14] dark:hover:text-[#a3c9b8]">
            <X className="h-4 w-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="mb-1 block text-xs font-medium text-stone-500 dark:text-[#8ab5a0]">{children}</label>;
}

const inputCls =
  "w-full rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-sm text-stone-700 outline-none transition focus:border-[#C9992C] focus:bg-white focus:ring-2 focus:ring-[#C9992C]/20 dark:border-[#2a4a38] dark:bg-[#0a1f14] dark:text-[#a3c9b8] dark:focus:bg-[#1a3a28]";

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function AdminDashboard() {
  const [tab, setTab] = useState("notes");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");

  const [notes, setNotes] = useState(seedNotes);
  const [articles, setArticles] = useState(seedArticles);
  const [clients, setClients] = useState(seedClients);

  const [noteModal, setNoteModal] = useState<{ open: boolean; draft: NoteDraft | null }>({ open: false, draft: null });
  const [articleModal, setArticleModal] = useState<{ open: boolean; draft: ArticleDraft | null }>({ open: false, draft: null });
  const [clientModal, setClientModal] = useState<{ open: boolean; draft: ClientDraft | null }>({ open: false, draft: null });

  const counts = {
    notes: notes.length,
    articles: articles.length,
    clients: clients.length,
    published: articles.filter((a) => a.status === "Published").length,
  };

  const filteredNotes = useMemo(
    () => notes.filter((n) => (n.title + n.body + n.tag).toLowerCase().includes(query.toLowerCase())),
    [notes, query]
  );
  const filteredArticles = useMemo(
    () => articles.filter((a) => a.title.toLowerCase().includes(query.toLowerCase())),
    [articles, query]
  );
  const filteredClients = useMemo(
    () =>
      clients.filter((c) => (c.name + c.company + c.email).toLowerCase().includes(query.toLowerCase())),
    [clients, query]
  );

  function saveNote(draft: NoteDraft) {
    if (draft.id) {
      setNotes((prev) => prev.map((n) => (n.id === draft.id ? { ...draft, id: draft.id } : n)));
    } else {
      setNotes((prev) => [{ ...draft, id: `n${Date.now()}` }, ...prev]);
    }
    setNoteModal({ open: false, draft: null });
  }

  function saveArticle(draft: ArticleDraft) {
    if (draft.id) {
      setArticles((prev) => prev.map((a) => (a.id === draft.id ? { ...draft, id: draft.id } : a)));
    } else {
      setArticles((prev) => [{ ...draft, id: `a${Date.now()}`, views: 0 }, ...prev]);
    }
    setArticleModal({ open: false, draft: null });
  }

  function saveClient(draft: ClientDraft) {
    if (draft.id) {
      setClients((prev) => prev.map((c) => (c.id === draft.id ? { ...draft, id: draft.id } : c)));
    } else {
      setClients((prev) => [{ ...draft, id: `c${Date.now()}` }, ...prev]);
    }
    setClientModal({ open: false, draft: null });
  }

  const pageMeta = {
    notes: { title: "Notes", hint: "Scratchpad for ideas, client details, and reminders." },
    articles: { title: "Articles", hint: "Drafts and published posts, in one list." },
    clients: { title: "Clients", hint: "People and companies you work with." },
  }[tab];

  return (
    <div className="flex h-full  min-h-screen w-full overflow-hidden bg-[#F6F4EF] text-stone-800 dark:bg-[#0a1f14] dark:text-[#a3c9b8]">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-stone-900/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-40 h-full lg:h-auto flex w-64 flex-col bg-[#181A20] text-stone-300 transition-transform duration-200 lg:static lg:translate-x-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center gap-2 px-5 py-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#C9992C] font-bold text-stone-900">N</div>
          <div>
            <p className="text-sm font-semibold text-white">Admin Workspace</p>
          </div>
          <button
            className="ml-auto rounded-md p-1 text-stone-400 hover:bg-white/5 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="mt-2 flex-1 space-y-1 px-3">
          {TABS.map(({ key, label, icon: Icon }) => {
            const active = tab === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setTab(key);
                  setQuery("");
                  setSidebarOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-lg border-l-2 px-3 py-2.5 text-sm transition
                ${active ? "border-[#C9992C] bg-white/5 font-medium text-white" : "border-transparent text-stone-400 hover:bg-white/5 hover:text-stone-200"}`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            );
          })}
        </nav>

      
      </aside>

      {/* Main column */}
      <div className="flex min-h-0 mt-20 flex-1 flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between gap-3 border-b border-stone-200 bg-white/80 px-4 py-3 backdrop-blur sm:px-6 dark:border-[#2a4a38] dark:bg-[#1a3a28]/80">
          <button
            className="rounded-md p-1.5 text-stone-500 hover:bg-stone-100 lg:hidden dark:hover:bg-[#0a1f14]"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="hidden sm:block">
            <h1 className="text-lg font-semibold text-stone-800 dark:text-[#d4f5e0]">{pageMeta?.title}</h1>
            <p className="text-xs text-stone-400 dark:text-[#8ab5a0]">{pageMeta?.hint}</p>
          </div>

          <div className="relative ml-auto w-full max-w-xs sm:ml-4">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400 dark:text-[#8ab5a0]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${tab === "overview" ? "everything" : tab}...`}
              className="w-full rounded-lg border border-stone-200 bg-stone-50 py-2 pl-9 pr-3 text-sm outline-none focus:border-[#C9992C] focus:ring-2 focus:ring-[#C9992C]/20 dark:border-[#2a4a38] dark:bg-[#0a1f14]"
            />
          </div>

          {tab !== "overview" && (
            <button
              onClick={() => {
                if (tab === "notes") setNoteModal({ open: true, draft: { title: "", body: "", tag: "", date: new Date().toISOString().slice(0, 10) } });
                if (tab === "articles") setArticleModal({ open: true, draft: { title: "", status: "Draft", date: new Date().toISOString().slice(0, 10) } });
                if (tab === "clients") setClientModal({ open: true, draft: { name: "", company: "", email: "", phone: "", status: "Lead" } });
              }}
              className="flex shrink-0 items-center gap-1.5 rounded-lg bg-[#181A20] px-3 py-2 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">New</span>
            </button>
          )}
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">

          {tab === "notes" && (
            <NotesView
              items={filteredNotes}
              empty={notes.length === 0}
              onEdit={(n) => setNoteModal({ open: true, draft: n })}
              onDelete={(id: string) => setNotes((prev) => prev.filter((n) => n.id !== id))}
            />
          )}

          {tab === "articles" && (
            <ArticlesView
              items={filteredArticles}
              empty={articles.length === 0}
              onEdit={(a) => setArticleModal({ open: true, draft: a })}
              onDelete={(id: string) => setArticles((prev) => prev.filter((a) => a.id !== id))}
            />
          )}

          {tab === "clients" && (
            <ClientsView
              items={filteredClients}
              empty={clients.length === 0}
              onEdit={(c) => setClientModal({ open: true, draft: c })}
              onDelete={(id: string) => setClients((prev) => prev.filter((c) => c.id !== id))}
            />
          )}
        </main>
      </div>

      {/* Note modal */}
      <Modal open={noteModal.open} onClose={() => setNoteModal({ open: false, draft: null })} title={noteModal.draft?.id ? "Edit note" : "New note"}>
        {noteModal.draft && (
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              if (noteModal.draft) saveNote(noteModal.draft);
            }}
          >
            <div>
              <FieldLabel>Title</FieldLabel>
              <input
                required
                className={inputCls}
                value={noteModal.draft.title}
                onChange={(e) => setNoteModal((m) => ({ ...m, draft: { ...m.draft, title: e.target.value } as NoteDraft }))}
              />
            </div>
            <div>
              <FieldLabel>Note</FieldLabel>
              <textarea
                required
                rows={4}
                className={inputCls}
                value={noteModal.draft.body}
                onChange={(e) => setNoteModal((m) => ({ ...m, draft: { ...m.draft, body: e.target.value } as NoteDraft }))}
              />
            </div>
            <div>
              <FieldLabel>Tag</FieldLabel>
              <input
                className={inputCls}
                placeholder="e.g. Agriplot, Portfolio"
                value={noteModal.draft.tag}
                onChange={(e) => setNoteModal((m) => ({ ...m, draft: { ...m.draft, tag: e.target.value } as NoteDraft }))}
              />
            </div>
            <button type="submit" className="w-full rounded-lg bg-[#181A20] py-2.5 text-sm font-medium text-white hover:bg-stone-800">
              Save note
            </button>
          </form>
        )}
      </Modal>

      {/* Article modal */}
      <Modal open={articleModal.open} onClose={() => setArticleModal({ open: false, draft: null })} title={articleModal.draft?.id ? "Edit article" : "New article"}>
        {articleModal.draft && (
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              if (articleModal.draft) saveArticle(articleModal.draft);
            }}
          >
            <div>
              <FieldLabel>Title</FieldLabel>
              <input
                required
                className={inputCls}
                value={articleModal.draft.title}
                onChange={(e) => setArticleModal((m) => ({ ...m, draft: { ...m.draft, title: e.target.value } as ArticleDraft }))}
              />
            </div>
            <div>
              <FieldLabel>Status</FieldLabel>
              <select
                className={inputCls}
                value={articleModal.draft.status}
                onChange={(e) => setArticleModal((m) => ({ ...m, draft: { ...m.draft, status: e.target.value } as ArticleDraft }))}
              >
                <option>Draft</option>
                <option>Published</option>
              </select>
            </div>
            <div>
              <FieldLabel>Date</FieldLabel>
              <input
                type="date"
                className={inputCls}
                value={articleModal.draft.date}
                onChange={(e) => setArticleModal((m) => ({ ...m, draft: { ...m.draft, date: e.target.value } as ArticleDraft }))}
              />
            </div>
            <button type="submit" className="w-full rounded-lg bg-[#181A20] py-2.5 text-sm font-medium text-white hover:bg-stone-800">
              Save article
            </button>
          </form>
        )}
      </Modal>

      {/* Client modal */}
      <Modal open={clientModal.open} onClose={() => setClientModal({ open: false, draft: null })} title={clientModal.draft?.id ? "Edit client" : "New client"}>
        {clientModal.draft && (
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              if (clientModal.draft) saveClient(clientModal.draft);
            }}
          >
            <div>
              <FieldLabel>Name</FieldLabel>
              <input
                required
                className={inputCls}
                value={clientModal.draft.name}
                onChange={(e) => setClientModal((m) => ({ ...m, draft: { ...m.draft, name: e.target.value } as ClientDraft }))}
              />
            </div>
            <div>
              <FieldLabel>Company</FieldLabel>
              <input
                className={inputCls}
                value={clientModal.draft.company}
                onChange={(e) => setClientModal((m) => ({ ...m, draft: { ...m.draft, company: e.target.value } as ClientDraft }))}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <FieldLabel>Email</FieldLabel>
                <input
                  type="email"
                  className={inputCls}
                  value={clientModal.draft.email}
                  onChange={(e) => setClientModal((m) => ({ ...m, draft: { ...m.draft, email: e.target.value } as ClientDraft }))}
                />
              </div>
              <div>
                <FieldLabel>Phone</FieldLabel>
                <input
                  className={inputCls}
                  value={clientModal.draft.phone}
                  onChange={(e) => setClientModal((m) => ({ ...m, draft: { ...m.draft, phone: e.target.value } as ClientDraft }))}
                />
              </div>
            </div>
            <div>
              <FieldLabel>Status</FieldLabel>
              <select
                className={inputCls}
                value={clientModal.draft.status}
                onChange={(e) => setClientModal((m) => ({ ...m, draft: { ...m.draft, status: e.target.value } as ClientDraft }))}
              >
                <option>Lead</option>
                <option>Active</option>
                <option>Archived</option>
              </select>
            </div>
            <button type="submit" className="w-full rounded-lg bg-[#181A20] py-2.5 text-sm font-medium text-white hover:bg-stone-800">
              Save client
            </button>
          </form>
        )}
      </Modal>
    </div>
  );
}


function NotesView({ items, empty, onEdit, onDelete }: { items: NoteDraft[]; empty: boolean; onEdit: (n: NoteDraft) => void; onDelete: (id: string) => void }) {
  if (empty)
    return <EmptyState icon={StickyNote} title="No notes yet" hint="Capture the first idea, reminder, or client detail." />;
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((n) => (
        <div key={n.id} className="group relative rounded-2xl border border-stone-200 bg-white p-4 dark:border-[#2a4a38] dark:bg-[#1a3a28]">
          <div className="mb-2 flex items-start justify-between">
            <h3 className="pr-2 text-sm font-semibold text-stone-800 dark:text-[#d4f5e0]">{n.title}</h3>
            <div className="flex shrink-0 gap-1 opacity-0 transition group-hover:opacity-100">
              <button onClick={() => onEdit(n)} className="rounded-md p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-600 dark:hover:bg-[#0a1f14] dark:hover:text-[#a3c9b8]">
                <Pencil className="h-3.5 w-3.5" />
              </button>
              <button onClick={() => onDelete(n.id!)} className="rounded-md p-1 text-stone-400 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-950/50 dark:hover:text-red-400">
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-stone-500 dark:text-[#8ab5a0]">{n.body}</p>
          <div className="mt-3 flex items-center justify-between text-xs text-stone-400 dark:text-[#8ab5a0]">
            {n.tag ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#F1E4C3]/60 px-2 py-0.5 text-[#9A6A11] dark:bg-[#2a4a38]/60 dark:text-[#a3c9b8]">
                <Tag className="h-3 w-3" /> {n.tag}
              </span>
            ) : (
              <span />
            )}
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> {n.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ArticlesView({ items, empty, onEdit, onDelete }: { items: ArticleDraft[]; empty: boolean; onEdit: (a: ArticleDraft) => void; onDelete: (id: string) => void }) {
  if (empty)
    return <EmptyState icon={Newspaper} title="No articles yet" hint="Draft your first post to see it here." />;
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-[#2a4a38] dark:bg-[#1a3a28]">
      {/* Table header - desktop only */}
      <div className="hidden grid-cols-[1fr_120px_120px_90px_60px] gap-3 border-b border-stone-100 px-4 py-2.5 text-xs font-medium text-stone-400 sm:grid dark:border-[#2a4a38] dark:text-[#8ab5a0]">
        <span>Title</span>
        <span>Status</span>
        <span>Date</span>
        <span>Views</span>
        <span />
      </div>
      <div className="divide-y divide-stone-100 dark:divide-[#2a4a38]">
        {items.map((a) => (
          <div key={a.id} className="grid grid-cols-1 gap-2 px-4 py-3 sm:grid-cols-[1fr_120px_120px_90px_60px] sm:items-center sm:gap-3">
            <p className="text-sm font-medium text-stone-700 dark:text-[#a3c9b8]">{a.title}</p>
            <div>
              <StatusPill value={a.status} />
            </div>
            <p className="text-xs text-stone-400 dark:text-[#8ab5a0]">{a.date}</p>
            <p className="text-xs text-stone-400 dark:text-[#8ab5a0]">{(a.views ?? 0).toLocaleString()}</p>
            <div className="flex gap-1 sm:justify-end">
              <button onClick={() => onEdit(a)} className="rounded-md p-1.5 text-stone-400 hover:bg-stone-100 hover:text-stone-600 dark:hover:bg-[#0a1f14] dark:hover:text-[#a3c9b8]">
                <Pencil className="h-3.5 w-3.5" />
              </button>
              <button onClick={() => onDelete(a.id!)} className="rounded-md p-1.5 text-stone-400 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-950/50 dark:hover:text-red-400">
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ClientsView({ items, empty, onEdit, onDelete }: { items: ClientDraft[]; empty: boolean; onEdit: (c: ClientDraft) => void; onDelete: (id: string) => void }) {
  if (empty)
    return <EmptyState icon={Users} title="No clients yet" hint="Add a lead or client to keep their details close." />;
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <div key={c.id} className="group relative rounded-2xl border border-stone-200 bg-white p-4 dark:border-[#2a4a38] dark:bg-[#1a3a28]">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#181A20] text-sm font-semibold text-white">
                {c.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-800 dark:text-[#d4f5e0]">{c.name}</p>
                <p className="flex items-center gap-1 text-xs text-stone-400 dark:text-[#8ab5a0]">
                  <Building2 className="h-3 w-3" /> {c.company || "—"}
                </p>
              </div>
            </div>
            <div className="flex shrink-0 gap-1 opacity-0 transition group-hover:opacity-100">
              <button onClick={() => onEdit(c)} className="rounded-md p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-600 dark:hover:bg-[#0a1f14] dark:hover:text-[#a3c9b8]">
                <Pencil className="h-3.5 w-3.5" />
              </button>
              <button onClick={() => onDelete(c.id!)} className="rounded-md p-1 text-stone-400 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-950/50 dark:hover:text-red-400">
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="mt-3 space-y-1.5 text-xs text-stone-500 dark:text-[#8ab5a0]">
            {c.email && (
              <p className="flex items-center gap-1.5 truncate">
                <Mail className="h-3 w-3 text-stone-400 dark:text-[#8ab5a0]" /> {c.email}
              </p>
            )}
            {c.phone && (
              <p className="flex items-center gap-1.5">
                <Phone className="h-3 w-3 text-stone-400 dark:text-[#8ab5a0]" /> {c.phone}
              </p>
            )}
          </div>

          <div className="mt-3">
            <StatusPill value={c.status} />
          </div>
        </div>
      ))}
    </div>
  );
}
