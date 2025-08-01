const Layout = ({ children } : { children : React.ReactNode}) => {
    return (
        <div className='min-h-1/4 text-white'>
            {children}
        </div>
    )
}

export default Layout;