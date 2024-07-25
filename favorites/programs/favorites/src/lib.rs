use anchor_lang::prelude::*;

declare_id!("3HShZpiDZyeraqGZc2gGNWqTP4fY7adee2srxd9FfY2Z");

#[program]
pub mod favorites {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
