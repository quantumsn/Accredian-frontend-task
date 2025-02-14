import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function Loader() {
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        p: 8,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Skeleton
        sx={{ bgcolor: "grey.400" }}
        variant="rectangular"
        width={800}
        height={400}
      />
    </Box>
  );
}
