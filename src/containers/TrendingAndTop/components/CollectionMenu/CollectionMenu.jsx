import { ClickAwayListener, Popper } from '@mui/material';
import React, { useState } from 'react';
import { Children } from 'react';
import { CollectionMenuButton, CollectionMenuItem, CollectionMenuStyled } from './style';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const CollectionMenu = ({ active }) => {
  const menu = ['24h', '7d', '30d', 'All'];
  const [activeMenu, setActiveMenu] = useState(menu[0]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleClickAway = (event) => {
    if(!event?.target?.className?.includes('popperElement')){
      setAnchorEl(null)
    }
  }

  return (
    <div>
      <CollectionMenuButton
        aria-describedby={id} type="button" onClick={handleClick}
        menu={true}
        disabled={active === 'trending'}
        className="popperElement"
        anchorEl={anchorEl}
        active={active}
      >
        {activeMenu} <KeyboardArrowDownIcon />
      </CollectionMenuButton>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Popper id={id} open={open} anchorEl={anchorEl} sx={{ zIndex: 9999 }}>
          <CollectionMenuStyled >
            {
              Children.toArray(menu.map((el, i) => <CollectionMenuItem onClick={() => {
                setActiveMenu(el)
                handleClick()
              }}>{el}</CollectionMenuItem>))
            }
          </CollectionMenuStyled>
        </Popper>
      </ClickAwayListener>

    </div>
  )
}

export default CollectionMenu



