import { OFFICES } from "@/app/data/site";

export default function LegalLocations() {
  return (
    <div className="mt-4 space-y-2 text-sm leading-relaxed">
      <p className="font-semibold">Locations and operating arrangements</p>
      {OFFICES.map((office, index) => (
        <p key={office.region}>
          <strong>{office.region}:</strong> {office.city} — {index === 0 ? "Registered address shown above." : office.detail}
        </p>
      ))}
    </div>
  );
}
