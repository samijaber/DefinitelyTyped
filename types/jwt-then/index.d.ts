/// <reference types="node" />

export type Secret = string | Buffer | { key: string; passphrase: string };

export interface SignOptions {
    /**
     * Signature algorithm. Could be one of these values :
     * - HS256:    HMAC using SHA-256 hash algorithm (default)
     * - HS384:    HMAC using SHA-384 hash algorithm
     * - HS512:    HMAC using SHA-512 hash algorithm
     * - RS256:    RSASSA using SHA-256 hash algorithm
     * - RS384:    RSASSA using SHA-384 hash algorithm
     * - RS512:    RSASSA using SHA-512 hash algorithm
     * - ES256:    ECDSA using P-256 curve and SHA-256 hash algorithm
     * - ES384:    ECDSA using P-384 curve and SHA-384 hash algorithm
     * - ES512:    ECDSA using P-521 curve and SHA-512 hash algorithm
     * - none:     No digital signature or MAC value included
     */
    algorithm?: string | undefined;
    keyid?: string | undefined;
    /** expressed in seconds or a string describing a time span [vercel/ms](https://github.com/vercel/ms).  Eg: 60, "2 days", "10h", "7d" */
    expiresIn?: string | number | undefined;
    /** expressed in seconds or a string describing a time span [vercel/ms](https://github.com/vercel/ms).  Eg: 60, "2 days", "10h", "7d" */
    notBefore?: string | number | undefined;
    audience?: string | string[] | undefined;
    subject?: string | undefined;
    issuer?: string | undefined;
    jwtid?: string | undefined;
    noTimestamp?: boolean | undefined;
    header?: object | undefined;
    encoding?: string | undefined;
}

/**
 * Sign the given payload into a JSON Web Token string
 * @param payload - Payload to sign, could be an literal, buffer or string
 * @param secretOrPrivateKey - Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA.
 * @param [options] - Options for the signature
 * @returns A proiose containing the JSON Web Token string
 */
export function sign(
    payload: string | Buffer | object,
    secretOrPrivateKey: Secret,
    options?: SignOptions,
): Promise<string>;

/**
 * Verify given token using a secret or a public key to get a decoded token
 * @param token - JWT string to verify
 * @param secretOrPublicKey - Either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA.
 * @param [options] - Options for the verification
 * @returns A promise containing either an error or the decoded JSON Web Token string
 */
export function verify(
    token: string,
    secretOrPublicKey: string | Buffer,
): Promise<object | string>;
