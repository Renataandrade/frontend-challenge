import React from 'react'
import { PageNotFound } from './PageNotFound'

interface Fallbacks {
  [pageNotFound: string]: React.ReactElement
}

interface FallbackProps {
  page: string
}

const fallbacks: Fallbacks = {
  pageNotFound: <PageNotFound />
}

export const Fallback = (
  props: FallbackProps
): React.ReactElement => {
  return fallbacks[props.page]
}