import { copyFileSync, existsSync } from "fs";
import { join } from "path";

// 确保WASM文件被复制到正确位置
const wasmSource = join(process.cwd(), "src/wasm/DumpWasm.wasm");
const wasmDest = join(process.cwd(), "dist/assets/DumpWasm.wasm");

if (existsSync(wasmSource)) {
  try {
    copyFileSync(wasmSource, wasmDest);
    console.log("✅ WASM file copied successfully");
  } catch (error) {
    console.error("❌ Failed to copy WASM file:", error);
  }
} else {
  console.warn("⚠️ WASM source file not found:", wasmSource);
}
