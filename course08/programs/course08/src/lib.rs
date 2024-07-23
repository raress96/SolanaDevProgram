use anchor_lang::prelude::*;

declare_id!("E3huu8ohTzvEDoHUkEbUXadCWyU9PaZLxdYRjkzpRc8y");

#[program]
pub mod course08 {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
