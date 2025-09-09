type Props = {
  pill: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({ pill, title, description, align = 'center' }: Props) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <div className={`flex flex-col ${alignClass} justify-center space-y-2`}>
      <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">{pill}</div>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
      {description ? (
        <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[65ch]">
          {description}
        </p>
      ) : null}
    </div>
  )
}
