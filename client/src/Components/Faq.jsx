const Faq = () => {
  return (
    <div className="w-full px-6 py-4 grid gap-4 bg-radial" id="faq">
      <h2 className="text-2xl font-bold">FAQ</h2>
      <div className="grid gap-4 ">
        <details className="bg-[#33b37b] w-full p-2 cursor-pointer">
          <summary>Details</summary>
          Something small enough to escape casual notice.
        </details>
        <details className="bg-[#33b37b] w-full p-2 cursor-pointer">
          <summary>Details</summary>
          Something small enough to escape casual notice.
        </details>
      </div>
    </div>
  );
};

export default Faq;
