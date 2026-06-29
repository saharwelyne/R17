import { useState } from "react";
import { brand } from "@/lib/brand-assets";
import { Reveal } from "./Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) nextErrors.firstName = "Please enter your first name";
    if (!formData.lastName.trim()) nextErrors.lastName = "Please enter your last name";
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) nextErrors.message = "Please enter a message";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const contactCards = [
    {
      title: "Book a call",
      detail: "Schedule a 30-minute intro",
      href: "#contact",
    },
    {
      title: "Call us",
      detail: "+41 43 588 19 23",
      href: "tel:+41435881923",
    },
    {
      title: "Email us",
      detail: "sales@r17ventures.com",
      href: "mailto:sales@r17ventures.com",
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-accent text-accent-foreground">
      <img
        src={brand.photos.p3}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-multiply"
      />
      <div className="relative container-r17 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Left — heading + contact cards */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-foreground/80">
                Contact us
              </p>
              <h2 className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
                Let&apos;s <span className="serif-accent">talk.</span>
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-accent-foreground/90">
                Tell us about your business and growth ambition. We&apos;ll come back
                to you within one business day with a custom proposal.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 space-y-4">
              {contactCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="group flex items-center justify-between rounded-sm border border-accent-foreground/15 bg-accent-foreground/5 p-5 transition-colors hover:bg-accent-foreground/10 md:p-6"
                >
                  <div>
                    <p className="text-[15px] font-semibold">{card.title}</p>
                    <p className="text-[13px] text-accent-foreground/70">{card.detail}</p>
                  </div>
                  <span
                    aria-hidden
                    className="text-sm font-semibold transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              ))}
            </Reveal>
          </div>

          {/* Right — form card */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="rounded-sm bg-card p-6 text-card-foreground shadow-xl md:p-10">
                {submitted ? (
                  <div className="py-10 text-center">
                    <p className="font-display text-2xl font-semibold md:text-3xl">
                      Thank you!
                    </p>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                      We&apos;ve received your message and will get back to you within one business day.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <p className="font-display text-xl font-semibold md:text-2xl">
                        Tell us what you&apos;re trying to grow.
                      </p>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                        One business day, real answer, no chase-up sequence.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="cta-firstName">
                            First name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="cta-firstName"
                            value={formData.firstName}
                            onChange={(e) =>
                              setFormData((p) => ({ ...p, firstName: e.target.value }))
                            }
                            placeholder="First name"
                          />
                          {errors.firstName && (
                            <p className="text-xs text-destructive">{errors.firstName}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cta-lastName">
                            Last name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="cta-lastName"
                            value={formData.lastName}
                            onChange={(e) =>
                              setFormData((p) => ({ ...p, lastName: e.target.value }))
                            }
                            placeholder="Last name"
                          />
                          {errors.lastName && (
                            <p className="text-xs text-destructive">{errors.lastName}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cta-company">Company</Label>
                        <Input
                          id="cta-company"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData((p) => ({ ...p, company: e.target.value }))
                          }
                          placeholder="Your company name"
                        />
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="cta-phone">Phone number</Label>
                          <Input
                            id="cta-phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData((p) => ({ ...p, phone: e.target.value }))
                            }
                            placeholder="+41 00 000 00 00"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cta-email">
                            Email <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="cta-email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData((p) => ({ ...p, email: e.target.value }))
                            }
                            placeholder="you@company.com"
                          />
                          {errors.email && (
                            <p className="text-xs text-destructive">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cta-message">
                          Message <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="cta-message"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData((p) => ({ ...p, message: e.target.value }))
                          }
                          placeholder="Tell us about your project, goals, and budget..."
                          rows={5}
                        />
                        {errors.message && (
                          <p className="text-xs text-destructive">{errors.message}</p>
                        )}
                      </div>

                      <p className="text-xs text-muted-foreground">
                        R17 Ventures will use your information to communicate about our services.
                        You may unsubscribe at any time.
                      </p>

                      <button
                        type="submit"
                        className="inline-flex h-12 items-center gap-2 rounded-sm bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                      >
                        Send message
                        <span aria-hidden>→</span>
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
