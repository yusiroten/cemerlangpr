export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex justify-center items-center">
          <p className="text-sm text-secondary-foreground/70">&copy; {new Date().getFullYear()} Cemerlang Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
