import "./listing.scss";
import { moduleFix } from "../../../chill";
import {
  defaultFix,
  bezpiecznik,
  existingModuleCallback,
  newModuleCallback,
} from "./actions";

const listing = moduleFix({
  moduleClass: "module__products",
  actions: [
    ["defaultFix", defaultFix],
    ["bezpiecznik", bezpiecznik],
  ],
  newModuleCallback,
  existingModuleCallback,
});

export default listing;
