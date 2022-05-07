class WASMLoader {
  constructor() { }

  async wasm(path) {
    console.log("Fetching from: " + path)

    if (WebAssembly.instantiateStreaming) {
      const { instance } = await WebAssembly.instantiateStreaming(fetch(path))


      console.log("🚀 ~ file: loader.js ~ line 15 ~ WASMLoader ~ wasm ~ instance?.exports", instance?.exports)
      return instance?.exports
    } else {
      this.wasmFallback(path)
    }
  }

  async wasmFallback(path) {
    //Safari e.g
    console.log("Fallback fetching from: " + path)

    const response = await fetch(path)
    const bytes = await response?.arrayBuffer() //convert to array buffer

    const { instance } = await WebAssembly.instantiate(bytes)


    return instance?.exports
  }
}