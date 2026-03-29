import Home from '../components/Home'

export function generateStaticParams() {
  return [
    { slug: ['dev'] },
    { slug: ['pro'] },
    { slug: ['academic'] },
    { slug: ['assoc'] },
    { slug: ['cv'] },
  ]
}

export default function Page() {
  return <Home />
}
