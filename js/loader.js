class WASMLoader {
  constructor() {
    this._imports = {
      "env": {
        abort() {
          throw new Error("Abort call ~ abort()")
        }
      },
      "index": {
        log(a, b) {
          console.log('Log imported function => ', a, b)
        }
      }
    }
  }

  async wasm(path, imports = this._imports) {
    console.log("Fetching from: " + path)

    if (loader.instantiateStreaming) {
      const instance = await loader.instantiateStreaming(fetch(path), imports)


      return instance
    } else {
      this.wasmFallback(path, imports)
    }
  }

  async wasmFallback(path, imports) {
    //Safari e.g
    console.log("Fallback fetching from: " + path)

    const response = await fetch(path)
    const bytes = await response?.arrayBuffer() //convert to array buffer

    const instance = await loader.instantiate(bytes, imports)


    return instance
  }
}