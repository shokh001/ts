// TypeScript Utils
// Utils -> Uppercase, Lowercase, Capitalize, UnCapitalize

type Sizes = 'sm' | 'md' | 'lg';

type U = Uppercase<Sizes>; // U = "SM" | "MD" | "LG"

type L = Lowercase<U> // L = "sm" | "md" | "lg"

type C = Capitalize<Sizes> // C = "Sm" | "Md" | "Lg"

type UC = Uncapitalize<C> // UC = "sm" | "md" | "lg"