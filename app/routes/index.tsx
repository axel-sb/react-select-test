import ReactSelect from "react-select";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div style={{ width: 400, margin: "40px auto" }}>
        <ReactSelect
          options={[
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
            { value: "3", label: "Option 3" }
          ]}
        />
      </div>
    </div>
  );
}
