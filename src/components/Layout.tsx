const Layout = ({ children } : { children : React.ReactNode}) => {
    return (
        <div className='min-h-1/4 pt-20'>
            {children}
        </div>
    )
}

export default Layout;