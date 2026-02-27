import React from 'react'
import { renderToString } from 'react-dom/server'
import { describe, it } from 'node:test'
import assert from 'node:assert'

import TechChip, { ReactChip, TailwindChip } from '../app/components/TechChip'
import Footer from '../app/components/Footer'

describe('TechChip (server component)', () => {
  it('renders with name', () => {
    const html = renderToString(React.createElement(TechChip, { name: 'Test' }))
    assert.ok(html.includes('Test'), 'Should contain name text')
  })

  it('renders ReactChip with link', () => {
    const html = renderToString(React.createElement(ReactChip))
    assert.ok(html.includes('React'), 'Should contain React text')
    assert.ok(html.includes('react.dev'), 'Should have React URL')
  })

  it('renders TailwindChip', () => {
    const html = renderToString(React.createElement(TailwindChip))
    assert.ok(html.includes('Tailwind'), 'Should contain Tailwind text')
  })
})

describe('Footer (server component)', () => {
  it('renders social links', () => {
    const html = renderToString(React.createElement(Footer))
    assert.ok(html.includes('github.com/mateotiedra'), 'Should have GitHub link')
    assert.ok(html.includes('linkedin.com'), 'Should have LinkedIn link')
    assert.ok(html.includes('mailto:mateo@tiedra.com'), 'Should have email link')
    assert.ok(html.includes('instagram.com'), 'Should have Instagram link')
  })
})
