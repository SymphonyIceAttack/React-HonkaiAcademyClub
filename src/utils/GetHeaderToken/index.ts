import { TOKEN } from "../Localkey";

export default () => {
    return {
        authorization: `Bearer ${localStorage.getItem(TOKEN) || "Bearer "}`,
    };
};
