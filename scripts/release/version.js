import spawn from "cross-spawn";

spawn.sync("npx", ["version"], { stdio: "inherit" });

spawn.sync(
  "npm",
  ["i", "--package-lock-only", "--no-audit", "--ignore-scripts", "--no-fund"],
  { stdio: "inherit" },
);
