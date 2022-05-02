const baseUrl =
    process.env.NODE_ENV === "production"
        ? "https://www.domain.com"
        : "http://localhost:3000"

export default baseUrl