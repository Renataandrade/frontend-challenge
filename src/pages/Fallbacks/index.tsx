import React from 'react'
import { FallbackType, IFallbacks } from 'models/Fallback'
import { PageNotFound } from './PageNotFound'

const fallbacks: IFallbacks = {
  pageNotFound: <PageNotFound />
}

export const Fallback = (
  page: FallbackType
): React.ReactElement => {
  return fallbacks[page]
}