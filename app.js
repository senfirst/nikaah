const SUPABASE_URL = "TON_PROJECT_URL";
const SUPABASE_KEY = "TA_PUBLISHABLE_KEY";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
