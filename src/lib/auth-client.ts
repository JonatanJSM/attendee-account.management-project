import { createAuthClient } from "better-auth/react";
import {
	adminClient,
	multiSessionClient,
} from "better-auth/client/plugins";
import { toast } from "sonner";

export const client = createAuthClient({
	plugins: [
		adminClient(),
		multiSessionClient(),
	],
	fetchOptions: {
		onError(e) {
			if (e.error.status === 429) {
				toast.error("Too many requests. Please try again later.");
			}
		},
	},
});

export const {
	signUp,
	signIn,
	signOut,
	useSession,
} = client;


export const client2 = client;