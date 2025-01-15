"use client"

import { Bell } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { jobs } from "../data/jobs"

export default function JobBoard() {
  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Job Board</h1>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-muted-foreground">{jobs.length} items</p>
        <div className="w-72">
          <Input placeholder="Search Opportunities..." className="bg-muted" />
        </div>
      </div>

      <Tabs defaultValue="open" className="mb-6">
        <TabsList>
          <TabsTrigger value="open" className="text-blue-600">
            Open Jobs & Projects
          </TabsTrigger>
          <TabsTrigger value="others">Others</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl">
                    {job.company.name[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{job.company.name}</h3>
                      <span className="text-sm text-muted-foreground">{job.postedAt}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>◦ {job.company.location}</span>
                      <span>◦ {job.type}</span>
                    </div>
                  </div>
                </div>
                {job.status === "Applied" ? (
                  <Badge variant="secondary">Applied</Badge>
                ) : (
                  <Button variant="default">Apply</Button>
                )}
              </div>

              <div className="mt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-600">
                    {job.workType}
                  </Badge>
                  <h2 className="font-semibold text-lg">{job.title}</h2>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-blue-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">{job.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

