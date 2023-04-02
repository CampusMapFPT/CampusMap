import {
    Input,
    InputProps,
    useMenuItem,
    UseMenuItemProps,
} from "@chakra-ui/react"
import React, {
    forwardRef,
} from "react"


// eslint-disable-next-line react/display-name
const MenuItemInput = forwardRef(
    (
        {
            onMouseEnter,
            onMouseMove,
            onMouseLeave,
            onClick,
            isDisabled,
            isFocusable,
            closeOnSelect,
            type,
            ...props
        }: InputProps & UseMenuItemProps,
        ref
    ) => {
        // we exclude role="menuitem" to prevent Menu typeahead
        // see https://github.com/chakra-ui/chakra-ui/blob/732195d/packages/components/menu/src/use-menu.ts#L418
        const {
            role,
            ...menuItemProps
        } = useMenuItem(
            {
                onMouseEnter,
                onMouseMove,
                onMouseLeave,
                onClick,
                isDisabled,
                isFocusable,
                closeOnSelect,
                type,
            },
            ref
        )
        return (
            <Input
                {...menuItemProps}
                {...props}
            />
        )
    }
)

export default MenuItemInput;