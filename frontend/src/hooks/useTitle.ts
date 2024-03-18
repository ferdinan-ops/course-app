import * as React from 'react'

export default function useTitle(title: string) {
  React.useEffect(() => {
    document.title = `Title ~ ${title}`
  }, [title])
}
