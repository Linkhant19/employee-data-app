// app/globals/page.tsx

import { getBonusPointValue } from "@/lib/getBonusPointValue";
import updateBonusPointValue from "@/lib/updateFunctions/updateBonusPointValue";
import Globals from "@/components/globals";

export default async function GlobalsPage() {
  const value = await getBonusPointValue();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Global Settings</h1>
      <Globals initialValue={value} action={updateBonusPointValue} />
    </main>
  );
}