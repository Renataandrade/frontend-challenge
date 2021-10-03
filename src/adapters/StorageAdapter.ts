class StorageAdapter {
  private static Storage = localStorage

  /**
   * Set item in storage
   * 
   * @param {string} key 
   * @param {string} value 
   */
  public static setItem = (key: string, value: string): void => {
    this.Storage.setItem(key, value)
  }

  /**
   * Get item from storage
   * 
   * @param {string} key
   * @returns {string}
   */
  public static getItem = (key: string): string | null => {
    return this.Storage.getItem(key)
  }
}

export default StorageAdapter