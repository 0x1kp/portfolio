export default function BlogIndex() {
  return (
    <main className="mt-24 space-y-6">
      <h1 className="text-2xl font-semibold">Blog</h1>
      <p className="text-muted-foreground">MDX support is enabled. Drop .mdx files under <code>app/(site)/blog/</code>.</p>
      <ul className="list-disc pl-6 text-sm text-muted-foreground">
        <li><a className="underline" href="/blog/hello-world">Hello World</a></li>
      </ul>
    </main>
  )
}
