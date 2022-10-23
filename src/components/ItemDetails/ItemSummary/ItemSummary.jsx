import FavoriteIcon from '@mui/icons-material/Favorite'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Box, IconButton, Tooltip, Typography, useMediaQuery } from '@mui/material'
import Link from '~components/Link'
import ItemMainStyled, { ItemCollectionInfo, ItemCountStyled, ItemCountText } from '../ItemMain/style'
import ItemToolbar from '../ItemToolbar'
import ItemMediaFrame from './ItemMediaFrame'
import ItemSummaryFrame from './ItemSummaryFrame'

const TooltipComp = () => {
  return (
    <Tooltip title="Blockchain: Solana" arrow placement='top'>
      <IconButton>
        <svg class="sc-77c97136-0 jvPDis" fill="#8A939B" height="20" viewBox="0 0 400 400" width="20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path class="SolanaLogo--s" clip-rule="evenodd" d="M123.42 255.13C124.173 254.302 125.09 253.641 126.113 253.188C127.135 252.735 128.242 252.501 129.36 252.5L312.64 252.65C313.421 252.652 314.184 252.88 314.837 253.307C315.49 253.734 316.006 254.342 316.32 255.056C316.635 255.77 316.735 256.561 316.609 257.331C316.483 258.101 316.136 258.818 315.61 259.395L276.58 302.37C275.827 303.198 274.909 303.86 273.885 304.313C272.862 304.766 271.755 305 270.635 305L87.3602 304.85C86.5796 304.848 85.8164 304.62 85.1631 304.193C84.5098 303.766 83.9946 303.158 83.6801 302.444C83.3655 301.73 83.2652 300.939 83.3913 300.169C83.5173 299.399 83.8643 298.682 84.3902 298.105L123.42 255.13ZM315.61 219.355C316.136 219.932 316.483 220.649 316.609 221.419C316.735 222.189 316.635 222.98 316.32 223.694C316.006 224.408 315.49 225.016 314.837 225.443C314.184 225.87 313.421 226.098 312.64 226.1L129.365 226.25C128.246 226.25 127.139 226.016 126.115 225.563C125.091 225.11 124.173 224.448 123.42 223.62L84.3902 180.62C83.8643 180.043 83.5173 179.326 83.3913 178.556C83.2652 177.786 83.3655 176.995 83.6801 176.281C83.9946 175.567 84.5098 174.959 85.1631 174.532C85.8164 174.105 86.5796 173.877 87.3602 173.875L270.64 173.725C271.759 173.726 272.865 173.96 273.888 174.413C274.911 174.866 275.828 175.527 276.58 176.355L315.61 219.355ZM123.42 97.63C124.173 96.8023 125.09 96.1408 126.113 95.6879C127.135 95.2351 128.242 95.0007 129.36 95L312.64 95.15C313.421 95.1516 314.184 95.3798 314.837 95.8069C315.49 96.234 316.006 96.8416 316.32 97.5559C316.635 98.2703 316.735 99.0606 316.609 99.8308C316.483 100.601 316.136 101.318 315.61 101.895L276.58 144.87C275.827 145.698 274.909 146.36 273.885 146.813C272.862 147.266 271.755 147.5 270.635 147.5L87.3602 147.35C86.5796 147.348 85.8164 147.12 85.1631 146.693C84.5098 146.266 83.9946 145.658 83.6801 144.944C83.3655 144.23 83.2652 143.439 83.3913 142.669C83.5173 141.899 83.8643 141.182 84.3902 140.605L123.42 97.63Z" fill="url(#paint0_linear)" fill-rule="evenodd"></path></g><defs><linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear" x1="90.4202" x2="309.58" y1="309.58" y2="90.42"><stop stop-color="#9945FF"></stop><stop offset="0.2" stop-color="#7962E7"></stop><stop offset="1" stop-color="#00D18C"></stop></linearGradient><clipPath id="clip0"><rect fill="white" height="210" transform="translate(80 95)" width="240"></rect></clipPath></defs></svg>
      </IconButton>
    </Tooltip>
  )
}

const ItemSummary = ({ ...rest }) => {
  const match = useMediaQuery('(max-width:1024px)')
  return (
    <Box {...rest}>
      {
        match &&
        <ItemMainStyled.Header>
          <ItemCollectionInfo>
            <ItemCollectionInfo.Detail>
                <Link href='/' className="truncate">
                  <span>Alphablocks NFT</span>
                </Link>
            </ItemCollectionInfo.Detail>
            <ItemCollectionInfo.Toolbar>
              <ItemToolbar />
            </ItemCollectionInfo.Toolbar>
          </ItemCollectionInfo>
          <Typography variant='md' as={'h1'}>
            AlphaBlocks #457
          </Typography>
        </ItemMainStyled.Header>
      }
      <ItemMediaFrame tooltip={<TooltipComp />} />
      {
        match &&
        <ItemCountStyled>
          <ItemCountText>
            Owned by <Link href="/"> 846D3B</Link>
          </ItemCountText>
          <ItemCountText>
            <VisibilityIcon />
            <span>15 views</span>
          </ItemCountText>
          <ItemCountText>
            <FavoriteIcon />
            <span>1 favorite</span>
          </ItemCountText>
        </ItemCountStyled>
      }
      <ItemSummaryFrame />
    </Box>
  )
}

export default ItemSummary