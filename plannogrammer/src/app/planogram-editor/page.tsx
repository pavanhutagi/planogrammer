import { PuckEditor } from "@components/puck-editor";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { useAppContext } from "@/context/AppContext";

export default function PlanogramEditor() {
  const { height, setHeight, width, setWidth } = useAppContext();

  return (
    <Stack className="w-full h-full">
      <section className="flex gap-4 justify-center">
        <TextField
          label="Height"
          size="small"
          InputProps={{
            endAdornment: <InputAdornment position="end">ft</InputAdornment>,
          }}
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <TextField
          label="Width"
          size="small"
          InputProps={{
            endAdornment: <InputAdornment position="end">ft</InputAdornment>,
          }}
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </section>

      <section className="w-full h-full">
        <PuckEditor />
      </section>
    </Stack>
  );
}
