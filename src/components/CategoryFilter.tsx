import { categories, type BonusCategory } from "@/data/bonuses";

interface CategoryFilterProps {
  active: BonusCategory | "all";
  onChange: (cat: BonusCategory | "all") => void;
  noWagerOnly: boolean;
  onNoWagerChange: (v: boolean) => void;
  newCustomerOnly: boolean;
  onNewCustomerChange: (v: boolean) => void;
}

const CategoryFilter = ({
  active,
  onChange,
  noWagerOnly,
  onNoWagerChange,
  newCustomerOnly,
  onNewCustomerChange,
}: CategoryFilterProps) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
              active === cat.id
                ? "gold-gradient text-accent-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-muted"
            }`}
          >
            <span className="mr-1.5">{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-4">
        <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
          <input
            type="checkbox"
            checked={noWagerOnly}
            onChange={(e) => onNoWagerChange(e.target.checked)}
            className="rounded border-border accent-accent"
          />
          Utan omsättningskrav
        </label>
        <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
          <input
            type="checkbox"
            checked={newCustomerOnly}
            onChange={(e) => onNewCustomerChange(e.target.checked)}
            className="rounded border-border accent-accent"
          />
          Nya kunder
        </label>
      </div>
    </div>
  );
};

export default CategoryFilter;
