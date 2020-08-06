#![warn(
    clippy::all,
    clippy::missing_docs_in_private_items,
    clippy::nursery,
    clippy::pedantic,
    missing_docs
)]
#![cfg(crashpad)]

mod util;

use anyhow::Result;

#[tokio::test(threaded_scheduler)]
async fn crash() -> Result<()> {
    util::external_events_failure(vec!["crash_failure".into()]).await
}
