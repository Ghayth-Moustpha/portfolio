"use client"

import { useState } from "react"
import { Badge } from "./components/ui/badge"
import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Brain,
  Server,
  Star,
  Award,
  Users,
  Zap,
} from "lucide-react"
import { LanguageSelector } from "./components/language-selector"
import { getTranslations, type Locale } from "./lib/i18n"
import { ThemeProvider } from "./components/theme-provider"

function App() {
  const [locale, setLocale] = useState<Locale>("en")
  const t = getTranslations(locale)
  const isRTL = locale === "ar"

  return (
    <ThemeProvider>
      <div className={`min-h-screen bg-background ${isRTL ? "rtl font-arabic" : "ltr"}`}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-semibold text-xl tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GM
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.about}
              </a>
              <a
                href="#skills"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.skills}
              </a>
              <a
                href="#projects"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.projects}
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.contact}
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <LanguageSelector currentLocale={locale} onLocaleChange={setLocale} />
            </div>
          </div>
        </header>

        <section className="relative pt-32 pb-24 px-6 bg-gradient-to-br from-background via-background to-slate-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="relative inline-block">
                <img
                  src="./ghayth.moustapha.jpg"
                  alt="Ghayth Moustapha"
                  className="w-32 h-32 rounded-full mx-auto mb-8 ring-2 ring-blue-500/20 shadow-2xl"
                />
                <div className="absolute bottom-8 right-2 w-6 h-6 bg-green-500 rounded-full ring-4 ring-background animate-pulse">
                  <div className="w-3 h-3 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
            <h1 className="font-bold text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent tracking-tight leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge
                variant="secondary"
                className="text-sm px-6 py-3 font-medium bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors"
              >
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                {t.hero.experience}
              </Badge>
              <Badge
                variant="secondary"
                className="text-sm px-6 py-3 font-medium bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors"
              >
                <Award className="w-4 h-4 mr-2 text-blue-400" />
                {t.hero.icpc}
              </Badge>
              <Badge
                variant="secondary"
                className="text-sm px-6 py-3 font-medium bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-colors"
              >
                <Users className="w-4 h-4 mr-2 text-green-400" />
                {t.hero.masters}
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                className="font-medium px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                {t.hero.hireMe}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-medium px-8 py-4 border-slate-600 hover:bg-slate-800/50 transition-colors bg-transparent"
                asChild
              >
                <a href="https://github.com/Ghayth-Moustpha" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  {t.hero.viewGithub}
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section id="skills" className="py-24 px-6 bg-slate-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-bold text-4xl md:text-5xl mb-6 tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {t.skills.title}
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">{t.skills.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-slate-700">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-8 h-8 text-blue-400" />
                  </div>
                  <CardTitle className="font-semibold text-xl text-white">{t.skills.fullStack.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-400 mb-6 leading-relaxed">{t.skills.fullStack.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline" className="text-xs font-medium border-blue-500/30 text-blue-300">
                      React
                    </Badge>
                    <Badge variant="outline" className="text-xs font-medium border-blue-500/30 text-blue-300">
                      Next.js
                    </Badge>
                    <Badge variant="outline" className="text-xs font-medium border-blue-500/30 text-blue-300">
                      TypeScript
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center group hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-slate-700">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Server className="w-8 h-8 text-green-400" />
                  </div>
                  <CardTitle className="font-semibold text-xl text-white">{t.skills.microservices.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-400 mb-6 leading-relaxed">{t.skills.microservices.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline" className="text-xs font-medium border-green-500/30 text-green-300">
                      NestJS
                    </Badge>
                    <Badge variant="outline" className="text-xs font-medium border-green-500/30 text-green-300">
                      Docker
                    </Badge>
                    <Badge variant="outline" className="text-xs font-medium border-green-500/30 text-green-300">
                      Kubernetes
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center group hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-slate-700">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-8 h-8 text-purple-400" />
                  </div>
                  <CardTitle className="font-semibold text-xl text-white">{t.skills.dataEngineering.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-400 mb-6 leading-relaxed">{t.skills.dataEngineering.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline" className="text-xs font-medium border-purple-500/30 text-purple-300">
                      Apache Airflow
                    </Badge>
                    <Badge variant="outline" className="text-xs font-medium border-purple-500/30 text-purple-300">
                      Python
                    </Badge>
                    <Badge variant="outline" className="text-xs font-medium border-purple-500/30 text-purple-300">
                      SQL
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center group hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-slate-700">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-8 h-8 text-orange-400" />
                  </div>
                  <CardTitle className="font-semibold text-xl text-white">{t.skills.machineLearning.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-400 mb-6 leading-relaxed">{t.skills.machineLearning.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="outline" className="text-xs font-medium border-orange-500/30 text-orange-300">
                      TensorFlow
                    </Badge>
                    <Badge variant="outline" className="text-xs font-medium border-orange-500/30 text-orange-300">
                      PyTorch
                    </Badge>
                    <Badge variant="outline" className="text-xs font-medium border-orange-500/30 text-orange-300">
                      Scikit-learn
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-bold text-3xl md:text-4xl mb-4 tracking-tight text-white">
                {locale === "ar" ? "عملاء موثوقون" : "Trusted by Leading Organizations"}
              </h2>
              <p className="text-slate-400 text-lg">
                {locale === "ar"
                  ? "فخور بالعمل مع منظمات رائدة في مختلف القطاعات"
                  : "Proud to work with leading organizations across various sectors"}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
              {["Al-Aliaa Group", "Ministry of Water Iraq", "Intenta", "Trilux", "KNUKC IQ", "Qafzah", "Inshaa"].map(
                (client, index) => (
                  <div key={index} className="group cursor-pointer transition-all duration-300 hover:scale-110">
                    <img
                      src={`/placeholder.svg?height=60&width=120&text=${encodeURIComponent(client)}`}
                      alt={client}
                      className="h-12 w-auto opacity-40 group-hover:opacity-80 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-bold text-4xl md:text-5xl mb-6 tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                {t.projects.title}
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                {t.projects.subtitle}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  key: "ecommerce",
                  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
                  live: true,
                },
                {
                  key: "conference",
                  image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop",
                },
                {
                  key: "trilux",
                  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop",
                },
                {
                  key: "sehpip",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
                },
                {
                  key: "icpcPlatform",
                  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
                },
                {
                  key: "mlDashboard",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
                },
              ].map((project) => (
                <Card
                  key={project.key}
                  className="group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-slate-700 overflow-hidden"
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={t.projects[project.key as keyof typeof t.projects].title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {project.live && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-green-500 text-white text-xs font-medium animate-pulse">Live</Badge>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <CardTitle className="font-semibold mb-3 text-xl text-white">
                        {t.projects[project.key as keyof typeof t.projects].title}
                      </CardTitle>
                      <CardDescription className="leading-relaxed text-slate-400">
                        {t.projects[project.key as keyof typeof t.projects].description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.key === "ecommerce" && (
                        <>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            React
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            Node.js
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            MongoDB
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            Stripe
                          </Badge>
                        </>
                      )}
                      {project.key === "conference" && (
                        <>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            React
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            TypeScript
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            Scrum
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            Analytics
                          </Badge>
                        </>
                      )}
                      {project.key === "trilux" && (
                        <>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            NestJS
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            TypeScript
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            Microservices
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            Docker
                          </Badge>
                        </>
                      )}
                      {project.key === "sehpip" && (
                        <>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            Apache Airflow
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            Python
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            GIS
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            Analytics
                          </Badge>
                        </>
                      )}
                      {project.key === "icpcPlatform" && (
                        <>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            React
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            Algorithms
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            C++
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            D3.js
                          </Badge>
                        </>
                      )}
                      {project.key === "mlDashboard" && (
                        <>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            React
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            TensorFlow
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            D3.js
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium bg-slate-800 text-slate-300 border-slate-700"
                          >
                            Python
                          </Badge>
                        </>
                      )}
                    </div>
                    <Button className="w-full font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.projects[project.key as keyof typeof t.projects].button}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-24 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-bold text-3xl md:text-4xl mb-4 tracking-tight">{t.about.title}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">{t.about.subtitle}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{t.about.description1}</p>
                <p className="text-muted-foreground leading-relaxed">{t.about.description2}</p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="font-medium bg-transparent" asChild>
                    <a
                      href="https://www.linkedin.com/in/ghayth-moustpha-51432a133/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" className="font-medium bg-transparent" asChild>
                    <a href="https://github.com/Ghayth-Moustpha" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="font-semibold text-lg flex items-center gap-3">
                      <Zap className="w-5 h-5" />
                      {t.about.currentRole.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t.about.currentRole.description}</p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="font-semibold text-lg flex items-center gap-3">
                      <Award className="w-5 h-5" />
                      {t.about.education.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                      {t.about.education.description}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="font-semibold text-lg flex items-center gap-3">
                      <Star className="w-5 h-5" />
                      {t.about.achievements.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                      {t.about.achievements.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-bold text-3xl md:text-4xl mb-8 tracking-tight">{t.contact.title}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">{t.contact.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="font-medium">
                <Mail className="w-4 h-4 mr-2" />
                {t.contact.email}
              </Button>
              <Button variant="outline" size="lg" className="font-medium bg-transparent" asChild>
                <a
                  href="https://www.linkedin.com/in/ghayth-moustpha-51432a133/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  {t.contact.linkedin}
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">7+</div>
                <div className="text-sm text-muted-foreground">{t.contact.stats.years}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">50+</div>
                <div className="text-sm text-muted-foreground">{t.contact.stats.projects}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">2K+</div>
                <div className="text-sm text-muted-foreground">{t.contact.stats.users}</div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 px-6 border-t border-border/40">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground text-sm">{t.footer.text}</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
