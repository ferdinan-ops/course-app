import { HiCheckCircle, HiExclamationTriangle } from 'react-icons/hi2'

import { useDisableBodyScroll } from '@/hooks'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import * as React from 'react'

export interface DialogOptions {
  title: string
  description: string
  variant: 'success' | 'danger'
  submitText: string
  isLoading?: boolean
  catchOnCancel?: boolean
}

interface BaseDialogProps extends DialogOptions {
  open: boolean
  onSubmit: () => void
  onClose: () => void
}

export default function Dialog({ open, onSubmit, onClose, ...rest }: BaseDialogProps) {
  const { title, description, variant, submitText } = rest

  useDisableBodyScroll(open)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (variant === 'success') {
        onSubmit()
      }
    }, 1500)

    return () => {
      clearTimeout(timeout)
    }
  }, [variant, onSubmit])

  return (
    <section
      className={cn(
        'fixed inset-0 z-[9999999] flex items-end justify-center p-4 transition-all duration-300 md:items-center',
        open ? 'visible bg-gray-900/75' : 'invisible'
      )}
    >
      <div
        className={cn(
          'flex w-full flex-col gap-6 overflow-hidden rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 xl:w-[486px] xl:max-w-[486px]',
          open ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        )}
      >
        <div className="flex flex-col items-center gap-4">
          {variant === 'danger' && <HiExclamationTriangle className="text-[144px] text-red-500" />}
          {variant === 'success' && <HiCheckCircle className="text-[144px] text-primary" />}

          <div className="mt-1 text-center">
            <h3 className="text-title text-base font-bold capitalize leading-6 md:text-3xl">{title}</h3>
            <p className="mt-2 text-sm text-gray-500 md:text-base">{description}</p>
          </div>
        </div>
        {variant === 'danger' && (
          <div className="flex flex-col-reverse items-center justify-center gap-4 md:flex-row">
            <Button
              variant="outline"
              className="w-full rounded-lg border-zinc-300 px-6 py-5 text-font md:w-fit"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className={cn(
                'w-full rounded-lg border px-6 py-5 capitalize md:w-fit',
                variant === 'danger' && 'border-red-500 bg-red-500 text-white hover:bg-red-600'
              )}
              onClick={onSubmit}
            >
              {submitText}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
