import chooseImg from './chooseImg'

const onPaste = (e: any, maxsize: number): Promise<any> | null => {
  if (!(e.clipboardData && e.clipboardData.items)) {
    return null
  }

  // eslint-disable-next-line consistent-return
  return new Promise((resolve) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0, len = e.clipboardData.items.length; i < len; i++) {
      const item = e.clipboardData.items[i]
      if (item.kind === 'file') {
        const pasteFile = item.getAsFile()
        chooseImg(pasteFile, maxsize, (url: any, file: any) => {
          resolve({ url, file })
        })
      }
    }
  })
}

export default onPaste