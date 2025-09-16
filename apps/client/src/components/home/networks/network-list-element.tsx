import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

interface NetworkListElementProps {
  icon: React.ReactNode;
  link: string;
  title: string;
  description?: string;
}

export default function NetworkListElement({
  icon,
  link,
  title,
  description,
}: NetworkListElementProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <motion.div
        whileHover={{ scale: 1.02, x: 8 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-card via-card/95 to-card/90 border border-border/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group-hover:border-primary/30"
      >
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="relative p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.div
              whileHover={{ rotate: 15 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center border border-primary/10 group-hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-6 h-6 text-primary group-hover:text-primary/90 transition-colors duration-300">
                {icon}
              </div>
            </motion.div>

            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 truncate">
                {title}
              </h3>
              {description && (
                <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300 line-clamp-2">
                  {description}
                </p>
              )}
            </div>
          </div>

          <motion.div
            initial={{ rotate: 0 }}
            whileHover={{ rotate: 45 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg flex items-center justify-center border border-primary/10 group-hover:border-primary/30 group-hover:bg-primary/20 transition-all duration-300"
          >
            <ArrowUpRight className="w-4 h-4 text-primary" />
          </motion.div>
        </div>

        {/* Hover effect line */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </motion.div>
    </Link>
  );
}
