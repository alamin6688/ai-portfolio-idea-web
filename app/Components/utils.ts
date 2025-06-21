// Utility functions for Portfolio App

// Generate a random idea from a list
export function getRandomIdea<T>(ideas: T[]): T {
  return ideas[Math.floor(Math.random() * ideas.length)];
}

// Scroll to a section by id
export function scrollToSection(
  sectionId: string,
  setActiveSection: (section: string) => void,
  setIsMenuOpen: (open: boolean) => void
) {
  setActiveSection(sectionId);
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  setIsMenuOpen(false);
}
