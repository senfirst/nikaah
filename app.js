const SUPABASE_URL = "https://yoixssfjtxrfcqrutcgv.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_mp--qt2kywTEhaBYjN3Afw_6-J6X_Bc";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

async function testerConnexion() {
    const { data, error } = await supabaseClient
        .from("profiles")
        .select("*")
        .limit(5);

    if (error) {
        console.error("❌ Erreur Supabase :", error);
        return;
    }

    console.log("✅ Connexion réussie :", data);
}

testerConnexion();
