-- ============================================================================
-- Atassi Cockpit – Einmal-Setup für echte Datei-Anhänge (Supabase Storage)
-- ----------------------------------------------------------------------------
-- Diese Schritte kann nur der Projekt-Owner ausführen (Client-/anon-Key darf
-- weder Buckets anlegen noch Spalten ändern). Einmal im Supabase-Dashboard
-- unter  SQL Editor  ausführen. Danach binde ich die Uploads in der App an
-- und teste sie mit dem ta-Login.
--
-- Der Bucket ist PRIVAT (medizinnahe Daten). Downloads laufen über kurzzeitig
-- gültige Signed URLs, die die App bei Bedarf erzeugt.
-- ============================================================================

-- 1) Privaten Bucket "attachments" anlegen (idempotent)
insert into storage.buckets (id, name, public)
values ('attachments', 'attachments', false)
on conflict (id) do nothing;

-- 2) Storage-Policies: nur angemeldete Nutzer dürfen in diesem Bucket
--    lesen / hochladen / löschen. (Feiner nach Rolle ließe sich später ergänzen.)
drop policy if exists "attachments read"   on storage.objects;
drop policy if exists "attachments insert" on storage.objects;
drop policy if exists "attachments delete" on storage.objects;

create policy "attachments read"
  on storage.objects for select
  to authenticated
  using ( bucket_id = 'attachments' );

create policy "attachments insert"
  on storage.objects for insert
  to authenticated
  with check ( bucket_id = 'attachments' );

create policy "attachments delete"
  on storage.objects for delete
  to authenticated
  using ( bucket_id = 'attachments' );

-- 3) Spalten für die Datei-Metadaten (Name, Größe, Storage-Pfad) je Datensatz
alter table public.todos    add column if not exists files jsonb not null default '[]'::jsonb;
alter table public.projects add column if not exists files jsonb not null default '[]'::jsonb;
-- Optional, falls auch Chat-Anhänge dauerhaft sein sollen:
-- alter table public.messages add column if not exists files jsonb not null default '[]'::jsonb;

-- Fertig. Nach dem Ausführen bitte kurz Bescheid geben – dann aktiviere ich
-- die Upload-Anbindung in der App und teste sie.
