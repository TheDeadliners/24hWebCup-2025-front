export function transformStringToSnakeCase(str: string) {
    return str.replace(/([A-Z])/g, "_$1").toLowerCase();
}

export function transformObjectToSnakeCaseKeys(obj: object): object {
    if (Array.isArray(obj)) {
        return obj.map(transformObjectToSnakeCaseKeys);
    } else if (typeof obj === "object" && obj !== null) {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [
                transformStringToSnakeCase(key),
                transformObjectToSnakeCaseKeys(value)
            ])
        );
    }
    return obj;
}

export function transformStringNullToRealNull(obj: object): object | null {
    if (Array.isArray(obj)) {
        return obj.map(transformStringNullToRealNull);
    } else if (typeof obj === "object" && obj !== null) {
        return Object.fromEntries(
            Object.entries(obj).map(([key, value]) => [
                key,
                transformStringNullToRealNull(value)
            ])
        );
    } else if (obj === "null" || obj == "") {
        return null;
    }
    return obj;
}