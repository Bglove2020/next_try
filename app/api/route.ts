import { createClient } from '../../utils/supabase/server';

// export default async function Notes() {
//
//
//     return <pre>{JSON.stringify(notes, null, 2)}</pre>
// }

export async function GET() {
    const supabase = await createClient();
    const { data: notes } = await supabase.from("notes").select();
    console.log(notes)
    // const data = await res.json()

    return Response.json({ notes })
}
