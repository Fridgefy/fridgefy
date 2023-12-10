import { authOptions } from "../api/auth/auth";
import { getServerSession } from "next-auth";

import ShoppingListPage from "@/components/pages/ShoppingListPage";

export default async function ShoppingList() {
  const session = await getServerSession(authOptions);
  console.log('session:', session);

  // Session value
  // session: {
  //   user: {
  //     name: '青山晃也',
  //     email: 'aoyama.ko0920@gmail.com',
  //     image: 'https://lh3.googleusercontent.com/a/ACg8ocKtIezSkZzTsRW7o3LPfOTydNTffcqkMdMPXLZ1W8DM=s96-c'
  //   }
  // }

  // TODO: Get fridge data
  // TODO: Get MyRecipe
  // TODO: Get MyRecipe details

  return (
    <ShoppingListPage />
  );
}
