"use client";

import { motion } from "framer-motion";
import { Bitcount_Grid_Double } from "next/font/google";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACT_CONTENT, contactItems } from "@/consts/contact";
import { cn } from "@/lib/utils";
import ContactEarth from "./contact-earth";

const bitcountGridDouble = Bitcount_Grid_Double({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

export default function ContactCard() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1
            className={cn(
              "text-5xl md:text-6xl font-bold mb-6 text-foreground",
              bitcountGridDouble.className,
            )}
          >
            {CONTACT_CONTENT.header.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {CONTACT_CONTENT.header.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ContactEarth />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>{CONTACT_CONTENT.sections.connect.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <InfoItem
                      key={item.title}
                      title={item.title}
                      value={item.value}
                      icon={<IconComponent className="w-6 h-6 text-primary" />}
                      href={item.href}
                    />
                  );
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  {CONTACT_CONTENT.sections.responseTime.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {CONTACT_CONTENT.sections.responseTime.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({
  title,
  value,
  icon,
  href,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  href?: string;
}) {
  const content = (
    <>
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p
          className={cn(
            "text-muted-foreground",
            href && "hover:text-primary transition-colors",
          )}
        >
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        className="flex items-center space-x-4 p-4 rounded-lg border border-border cursor-pointer hover:border-primary/50 transition-colors"
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex items-center space-x-4 p-4 rounded-lg border border-border"
    >
      {content}
    </motion.div>
  );
}
