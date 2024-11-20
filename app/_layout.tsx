import { Slot } from "expo-router";
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

export default function _layout() {
  return (
    <ActionSheetProvider>
      <Slot />
    </ActionSheetProvider>
  );
}