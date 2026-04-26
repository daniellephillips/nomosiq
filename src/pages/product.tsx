import { Link } from "react-router-dom"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { demoUrl } from "@/lib/constants"

const capabilities = [
  "Document ingestion and OCR",
  "Vector indexing for private knowledge search",
  "Retrieval-augmented answers with citations",
  "Workflow orchestration for repeatable review tasks",
  "Role-based access and audit logging",
  "Optional modules for redaction, timelines, and contract risk review",
]

const workflows = [
  {
    title: "Document intelligence",
    text: "Ask targeted questions across leases, pleadings, discovery, transcripts, and internal knowledge.",
  },
  {
    title: "Litigation timelines",
    text: "Extract facts, people, dates, and events from dense case materials into attorney-reviewable timelines.",
  },
  {
    title: "Contract review",
    text: "Identify indemnity, liability, termination, and deviation issues against firm standards.",
  },
  {
    title: "Redaction readiness",
    text: "Flag PII, PHI, and sensitive terms before filing to support safer document workflows.",
  },
]

export function ProductPage() {
  return (
    <>
      <section className="border-b bg-muted/30">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Badge variant="secondary">Product</Badge>
          <h1 className="mt-5 max-w-4xl text-4xl leading-tight font-semibold tracking-normal sm:text-5xl">
            A private AI layer for legal document workflows.
          </h1>
          <p className="mt-5 max-w-3xl text-[18px] leading-[1.65] text-text-body">
            Nomos AI sits between a firm&apos;s existing legal systems and its
            internal knowledge, making sensitive documents searchable,
            explainable, and usable without sending them to public AI tools.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={demoUrl} target="_blank" rel="noreferrer">
                Book Demo
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/security">Review Security</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold tracking-normal">
            Core system capabilities
          </h2>
          <p className="mt-4 text-[18px] leading-[1.65] text-text-body">
            The platform is built around private retrieval, source citation, and
            workflow automation for document-heavy legal teams.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <Card key={capability}>
              <CardContent className="p-5">
                <p className="font-medium">{capability}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Badge variant="secondary">Workflow modules</Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-normal">
              Use cases aligned to real legal review pressure.
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {workflows.map((workflow) => (
              <Card key={workflow.title}>
                <CardHeader>
                  <CardTitle>{workflow.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[16px] leading-[1.6] text-text-soft">
                    {workflow.text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
