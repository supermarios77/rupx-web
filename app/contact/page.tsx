import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function page() {
  return (
    <div className="dark:text-gray-50">
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">Get in Touch</h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Have a question or want to work together? Fill out the form below or send us an email.
            </p>
            <form className="mt-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                />
              </div>
              <div>
                <Button className="w-full" type="submit">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Contact Information</h2>
            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">partnerships@rupaya.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
