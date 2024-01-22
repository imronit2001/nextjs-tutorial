export default function ColorBoxLayout({ children , left, right}) {
    const isSidebar = true;
    return (
        <section className="colorbox">
            {children}
            {isSidebar? left : right}
        </section>
    );
}